/*
  # Add profiles trigger

  1. New Functions
    - handle_new_user() - Creates profile when user signs up
  
  2. New Triggers
    - on_auth_user_created - Triggers profile creation on user signup
*/

-- Create function to handle new user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (id, display_name)
  VALUES (new.id, SPLIT_PART(new.email, '@', 1))
  ON CONFLICT (id) DO UPDATE
  SET display_name = EXCLUDED.display_name
  WHERE profiles.display_name IS NULL;
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger to automatically create profile
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
