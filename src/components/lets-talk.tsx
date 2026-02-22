"use client"
import React from "react"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { IconArrowRight, IconCheck, IconLoader } from "@tabler/icons-react"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form"
import { collection, addDoc } from "firebase/firestore"
import { db } from "@/lib/firebase"
import { toast } from "sonner"

const formSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  message: z.string().min(2).max(500),
})

function LetsTalk() {
  const [loading, setLoading] = React.useState(false)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true)
    try {
      await addDoc(collection(db, "portfolio-forms"), {
        name: values.name,
        email: values.email,
        message: values.message,
      })
      toast(
        "Message sent successfully. I'll get back to you soon.",
        {
          position: "bottom-right",
          icon: <IconCheck className="h-5 w-5" />,
          style: {
            background: "hsl(142 71% 45%)",
            color: "#fff",
          },
        }
      )
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
      form.reset()
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="group inline-flex items-center gap-3 bg-primary text-primary-foreground font-display font-semibold px-8 py-4 rounded-full hover:brightness-110 transition-all duration-300 text-sm md:text-base">
          {`Let's Talk`}
          <IconArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[440px] bg-card border-border rounded-2xl">
        <DialogHeader>
          <DialogTitle className="font-display text-xl font-bold">
            Get in touch
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            {`Drop me a message and I'll get back to you.`}
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Your name"
                      className="bg-secondary border-border focus:border-primary rounded-xl h-11"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="your@email.com"
                      className="bg-secondary border-border focus:border-primary rounded-xl h-11"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    Message
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="What's on your mind?"
                      className="bg-secondary border-border focus:border-primary rounded-xl min-h-[100px] resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <DialogClose asChild>
                <button
                  className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-display font-semibold px-6 py-3 rounded-xl hover:brightness-110 transition-all duration-300 disabled:opacity-50"
                  type="submit"
                  disabled={loading}
                >
                  {loading && (
                    <IconLoader className="h-4 w-4 animate-spin" />
                  )}
                  Send Message
                </button>
              </DialogClose>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

export default LetsTalk
