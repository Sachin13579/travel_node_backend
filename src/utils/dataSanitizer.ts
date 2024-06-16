import { z } from "zod";

const adminUser = z.object({
  name: z.string(),
  email: z.string().email("admin@example.com,use a valid email address."),
  password: z.string(),
  phone: z.string(),
  address: z.string(),
});

// export z.infer

const dataSantizer = {
  adminUser,
};
export default dataSantizer;
