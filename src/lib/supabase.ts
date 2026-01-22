import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://qbsblqdpcsinsdvogbrb.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFic2JscWRwY3NpbnNkdm9nYnJiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg5MDM1MjgsImV4cCI6MjA4NDQ3OTUyOH0.7cTd3yEBgsUlGSsAjF5KUvVQOg16tItZ7_QNLN4Jytk";

export const supabase = createClient(supabaseUrl, supabaseKey);
