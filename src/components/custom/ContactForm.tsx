import { useRef } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useTranslation } from "react-i18next"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

// Schema factory for i18n
const getContactSchema = (t: (key: string, options?: any) => string) => {
    return z.object({
        name: z.string().min(2, { message: t('cta.form.validation.min', { min: 2 }) }),
        surname: z.string().min(2, { message: t('cta.form.validation.min', { min: 2 }) }),
        email: z.string().email({ message: t('cta.form.validation.email') }),
        message: z.string().min(10, { message: t('cta.form.validation.min', { min: 10 }) }),
    })
}

type ContactFormValues = z.infer<ReturnType<typeof getContactSchema>>

export function ContactForm() {
    const { t } = useTranslation()
    const formSchema = getContactSchema(t)
    const formSchemaRef = useRef(formSchema)
    formSchemaRef.current = formSchema

    const form = useForm<ContactFormValues>({
        resolver: (data, context, options) => zodResolver(formSchemaRef.current)(data, context, options),
        mode: "onBlur",
        defaultValues: {
            name: "",
            surname: "",
            email: "",
            message: "",
        },
    })

    function onSubmit(data: ContactFormValues) {
        console.log("Form submitted:", data)
        // Here you would typically send the data to your backend
        // For now, we just log it as requested
    }

    return (
        <div className="w-full mx-auto">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 text-left">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input
                                            placeholder={t('cta.form.name.placeholder')}
                                            {...field}
                                            className="bg-background/50 border-input/50 focus:border-primary/50 focus:ring-primary/20 h-12 text-lg"
                                        />
                                    </FormControl>
                                    <FormMessage className="text-red-500 animate-in fade-in slide-in-from-top-1 duration-300" />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="surname"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input
                                            placeholder={t('cta.form.surname.placeholder')}
                                            {...field}
                                            className="bg-background/50 border-input/50 focus:border-primary/50 focus:ring-primary/20 h-12 text-lg"
                                        />
                                    </FormControl>
                                    <FormMessage className="text-red-500 animate-in fade-in slide-in-from-top-1 duration-300" />
                                </FormItem>
                            )}
                        />
                    </div>

                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        type="email"
                                        placeholder={t('cta.form.email.placeholder')}
                                        {...field}
                                        className="bg-background/50 border-input/50 focus:border-primary/50 focus:ring-primary/20 h-12 text-lg"
                                    />
                                </FormControl>
                                <FormMessage className="text-red-500 animate-in fade-in slide-in-from-top-1 duration-300" />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Textarea
                                        placeholder={t('cta.form.message.placeholder')}
                                        {...field}
                                        className="min-h-[160px] bg-background/50 border-input/50 focus:border-primary/50 focus:ring-primary/20 resize-none text-lg p-4"
                                    />
                                </FormControl>
                                <FormMessage className="text-red-500 animate-in fade-in slide-in-from-top-1 duration-300" />
                            </FormItem>
                        )}
                    />

                    <div className="flex flex-col sm:flex-row items-center gap-6 pt-6">
                        <Button
                            type="submit"
                            size="lg"
                            className="w-full sm:flex-1 text-lg font-bold h-14"
                            disabled={!form.formState.isValid || !form.formState.isDirty}
                        >
                            {t('cta.form.submit')}
                        </Button>

                        <div className="relative flex items-center py-2 w-full sm:hidden">
                            <div className="flex-grow border-t border-border/50"></div>
                            <span className="flex-shrink-0 mx-4 text-muted-foreground text-sm uppercase tracking-wider">{t('cta.form.or')}</span>
                            <div className="flex-grow border-t border-border/50"></div>
                        </div>

                        <div className="hidden sm:block text-muted-foreground text-sm uppercase tracking-wider font-semibold">
                            {t('cta.form.or')}
                        </div>

                        <Button
                            asChild
                            size="lg"
                            variant="outline"
                            className="w-full sm:flex-1 text-lg hover:bg-accent bg-transparent text-surface/80 border-primary/20 hover:border-primary/50 h-14"
                        >
                            <a href="tel:+1234567890">
                                {t('cta.secondary')}
                            </a>
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    )
}
