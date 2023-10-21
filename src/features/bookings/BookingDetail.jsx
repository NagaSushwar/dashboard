import styled from "styled-components";
import PropTypes from 'prop-types';


 import BookingDataBox from "./BookingDataBox";
import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import Tag from "../../ui/Tag";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";

import { useMoveBack } from "../../hooks/useMoveBack";
import { useBooking } from "./useBooking";
import Spinner from "../../ui/Spinner";
 import { useNavigate } from "react-router-dom";
import { useCheckOut } from "../check-in-out/useCheckOut";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { useDeleteBooking } from "./useDeleteBooking";

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

function BookingDetail() {
  // const booking = {};
  const {booking,isLoading} = useBooking();  
  const {checkout,isCheckingOut} = useCheckOut();
  const {isDeleting,deleteBooking} = useDeleteBooking();

  const moveBack = useMoveBack();
  const navigate = useNavigate();
  if(isLoading) return<Spinner/>
  const {status,id:bookingId} = booking;
  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };

  return (
    <>
      <Row type="horizontal" style={{type:"flex",justifyContent:"space-between"}}>
        <HeadingGroup>
          <Heading as="h1">Booking #{bookingId}</Heading>
          <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>
        </HeadingGroup>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />
{status==="unconfirmed"&&<Button  onClick={()=>navigate(`/checkin/${bookingId}`)}>
              Check In
            </Button>}
            {status==="checked-in"&&<Button
                           onClick={()=>checkout(bookingId)}
                           disabled={isCheckingOut} >
              Check Out
            </Button>}
          <Modal>
            <Modal.Open opens="delete">
              <Button variation="danger">
                Delete Booking
              </Button>
            </Modal.Open>
            <Modal.Window name="delete">
              <ConfirmDelete resourceName="booking" onConfirm={()=>{deleteBooking(bookingId,{
                onSettled: ()=>navigate(-1),
              })}} disabled={isDeleting}>

              </ConfirmDelete>

            </Modal.Window>
          </Modal>

      <ButtonGroup>
        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}
BookingDetail.propTypes = {
  booking: PropTypes.shape({
    id: PropTypes.number,
    created_at: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    numNights: PropTypes.number,
    numGuests: PropTypes.number,
    cabinPrice: PropTypes.number,
    extrasPrice: PropTypes.number,
    totalPrice: PropTypes.number,
    hasBreakfast: PropTypes.bool,
    observations: PropTypes.string,
    isPaid: PropTypes.bool,
    guests: PropTypes.shape({
      fullName: PropTypes.string,
      email: PropTypes.string,
      country: PropTypes.string,
      countryFlag: PropTypes.string,
      nationalID: PropTypes.string,
    }),
    cabins: PropTypes.shape({
      name: PropTypes.string,
    }),
  }),
};

export default BookingDetail;
