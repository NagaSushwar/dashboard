import Heading from "../ui/Heading";
import Row from "../ui/Row";
import BookingTable from "./../features/bookings/BookingTable"
import BookingTableOperations from "../features/bookings/BookingTableOperations";

function Bookings() {
  return (<>
    <Row type="horizontal" style={{display:"flex",justifyContent:"space-between"}}>
      <Heading as="h1">All bookings</Heading>
      <div>

      <BookingTableOperations/>
      </div>
    </Row>
    <BookingTable/>
  </>
  );
}

export default Bookings;
