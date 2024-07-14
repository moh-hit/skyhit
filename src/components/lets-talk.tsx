"use client"
import React from "react"
import { Button } from "@/components/ui/button"
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
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { IconArrowRight, IconCheck, IconLoader } from "@tabler/icons-react"
import { set, z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Form,
  FormControl,
  FormDescription,
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
        "Congratulations, You have successfully submitted the form. Now just sit back, let me take care of this.",
        {
          position: "bottom-right",
          icon: <IconCheck className="h-5 w-5" />,
          style: {
            background: "rgb(var(--toast-success))",
            color: "rgb(var(--white))",
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
        <Button
          className="font-bold rounded-full bg-gradient-to-r from-indigo-600 to-blue-500"
          size="xl"
        >
          {`Let's Talk`}
          <IconArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{"Contact me"}</DialogTitle>
          <DialogDescription>
            {"Let's get in touch and find out how I can help you."}
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input id="name" defaultValue="" {...field} />
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
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input id="email" defaultValue="" {...field} />
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
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea id="message" defaultValue="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <DialogClose>
                <Button
                  className="font-bold bg-gradient-to-r from-indigo-600 to-blue-500"
                  size="xl"
                  type="submit"
                  disabled={loading}
                >
                  {loading && (
                    <IconLoader className="mr-2 h-4 w-4 animate-spin" />
                  )}
                  Submit
                </Button>
              </DialogClose>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

export default LetsTalk
