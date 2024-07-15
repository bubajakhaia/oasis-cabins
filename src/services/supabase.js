import { createClient } from '@supabase/supabase-js'


export const supabaseUrl = 'https://kciowdtpxyglqujmibhg.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtjaW93ZHRweHlnbHF1am1pYmhnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA1Njc1MDIsImV4cCI6MjAzNjE0MzUwMn0.VRn_VflWbbDPcV_c1iNFpwds-sSxRCds-Mx6c12hT9o";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;