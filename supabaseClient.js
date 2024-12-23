import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  'https://jftnmlzxkbzvharzytie.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpmdG5tbHp4a2J6dmhhcnp5dGllIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ2ODE5MDYsImV4cCI6MjA1MDI1NzkwNn0.WtYDd90E8UW1qdcFKoS143NSTFnivVJvKdG4c_MioTI'
)
