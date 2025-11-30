import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'


let supaUrl = "https://gqzkniocuqnrbqmsjclx.supabase.co"
let supaKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdxemtuaW9jdXFucmJxbXNqY2x4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQzMzk1MjgsImV4cCI6MjA3OTkxNTUyOH0.jYkkOo2sYBEdReAEAg2oytDyiniG3CPSSkklWtvQtPE"


const supabase = createClient(supaUrl, supaKey)


export default supabase;