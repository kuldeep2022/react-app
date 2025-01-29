import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://xiugmrruhfjsoihjxxiw.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhpdWdtcnJ1aGZqc29paGp4eGl3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc3Nzg5MTMsImV4cCI6MjA1MzM1NDkxM30.R8GUvY6omQjIS4lzOdNp5e1eBunJYxdyqOegRIwVlTI'
export const supabase = createClient(supabaseUrl, supabaseKey)