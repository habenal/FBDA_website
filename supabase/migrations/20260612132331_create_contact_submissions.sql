/*
# Create contact_submissions table

## Summary
Creates a public contact form submissions table for the Future Bridge Development Action website.
Visitors fill out a name/email/phone/message form; rows land here for staff review.

## New Tables
- `contact_submissions`
  - `id`         — uuid primary key, auto-generated
  - `name`       — full name of the sender (required)
  - `email`      — sender's email address (required)
  - `phone`      — optional phone number
  - `message`    — the message body (required)
  - `created_at` — submission timestamp (auto-set)

## Security
- RLS enabled. Data is intentionally public/shared (no sign-in on this site).
- anon + authenticated can INSERT (submit a form).
- No SELECT/UPDATE/DELETE policies for anon — submissions are write-only from the public.
  Staff can query directly via the Supabase dashboard or a service-role key.

## Notes
1. This is a single-tenant, no-auth app — `user_id` columns and auth.uid() checks are intentionally absent.
2. USING (true) on INSERT WITH CHECK is intentional: the data is public-facing.
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id         uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  name       text        NOT NULL,
  email      text        NOT NULL,
  phone      text,
  message    text        NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "public_insert_contact" ON contact_submissions;
CREATE POLICY "public_insert_contact" ON contact_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
