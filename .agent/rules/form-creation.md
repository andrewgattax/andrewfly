---
trigger: model_decision
description: Whenever I ask you to build or edit a form
---

# Form Validation Guidelines

This guide outlines the standard approach for implementing form validation using **Zod**, **React Hook Form**, and **Shadcn UI**, with full support for **Internationalization (i18n)**.

## Stack

- **[Zod](https://zod.dev/)**: For schema definition and validation logic.
- **[React Hook Form](https://react-hook-form.com/)**: For efficient form state management.
- **[@hookform/resolvers](https://github.com/react-hook-form/resolvers)**: To integrate Zod with React Hook Form.
- **[i18next](https://www.i18next.com/)**: For translating validation error messages.

## Installation

Ensure you have the required dependencies and Shadcn components:

```bash
npm install zod react-hook-form @hookform/resolvers
npx shadcn@latest add form input label button
```

## 1. Schema Definition with i18n

To ensure error messages are translated, **avoid defining static schemas**. Instead, create a schema factory function that accepts the `t` translation function.

**Why?** This allows validation messages to react to language changes dynamically without complex formatting logic in the UI.

### Example Schema (`schemas/contact-schema.ts`):

```ts
import { z } from "zod";
import { TFunction } from "i18next";

export const getContactSchema = (t: TFunction) => {
  return z.object({
    username: z
      .string()
      .min(2, { message: t("validation.username.min") }) // Use translation key
      .max(50, { message: t("validation.username.max") }),
    
    email: z
      .string()
      .email({ message: t("validation.email.invalid") }), // Custom error message
      
    subject: z
      .string()
      .min(5, { message: t("validation.subject.min") }),
  });
};

export type ContactFormValues = z.infer<ReturnType<typeof getContactSchema>>;
```

## 2. Form Component Implementation

Implement the form inside your component using `useForm` and the `zodResolver`.

### Example Component (`components/ContactForm.tsx`):

```tsx
"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useTranslation } from "react-i18next"
import { getContactSchema, type ContactFormValues } from "@/schemas/contact-schema" // Adjust path

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

export function ContactForm() {
  const { t } = useTranslation()

  // 1. Create the schema with the current 't' function
  const formSchema = getContactSchema(t)

  // 2. Initialize useForm
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      subject: "",
    },
  })

  // 3. Define submit handler
  function onSubmit(values: ContactFormValues) {
    console.log(values)
    // Handle form submission...
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        
        {/* Username Field */}
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("form.username.label")}</FormLabel>
              <FormControl>
                <Input placeholder={t("form.username.placeholder")} {...field} />
              </FormControl>
              <FormDescription>
                {t("form.username.description")}
              </FormDescription>
              <FormMessage /> {/* Automatically displays translated error */}
            </FormItem>
          )}
        />

        {/* Submit Button */}
        <Button type="submit">{t("form.submit")}</Button>
      </form>
    </Form>
  )
}
```

## 3. Translation Keys

Ensure your translation files (e.g., `src/locales/en.json`) include the keys used in the schema.

```json
{
  "validation": {
    "username": {
      "min": "Username must be at least 2 characters.",
      "max": "Username cannot exceed 50 characters."
    },
    "email": {
      "invalid": "Please enter a valid email address."
    },
    "subject": {
      "min": "Subject is required and must be clear."
    }
  },
  "form": {
    "username": {
      "label": "Username",
      "placeholder": "shadcn",
      "description": "This is your public display name."
    },
    "submit": "Submit"
  }
}
```

## Best Practices

1.  **Centralize Schemas**: Keep schemas in separate files (e.g., `src/schemas/`) if they are large or shared.
2.  **Memoization**: If you notice performance issues (rare for simple forms), wrap the schema creation in `useMemo`.
    ```tsx
    const formSchema = useMemo(() => getContactSchema(t), [t]);
    ```
3.  **Type Safety**: Always export the inferred type (`z.infer`) from your schema file to ensure strict type checking in your `onSubmit` handler.
4.  **Server-Side Validation**: Remember that client-side validation is for UX. Always validate data on the server using the same Zod schema (instantiate it with a server-side `t` or default language).
