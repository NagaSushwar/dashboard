import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://bgcewhlanqraedecikab.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJnY2V3aGxhbnFyYWVkZWNpa2FiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTcyNzE3NTAsImV4cCI6MjAxMjg0Nzc1MH0.zqpsUtpEavV9KNa3I6KA17jwS9P_tnqsKHyH4xstae4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
