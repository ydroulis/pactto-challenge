import { z } from 'zod';

export const FormSchema = z.object({
  name: z.string().min(1, 'First name is required'),
  secondName: z.string().min(1, 'Second name is required'),
  email: z.string().email('Email invalid'),
  user: z.string().min(1, 'User name is required'),
});
