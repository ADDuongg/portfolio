"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { iconContact, iconSocial } from "@/constants";
import Link from "next/link";
const formSchema = z.object({
  name_5367901925: z.string(),
  name_7851597348: z.string(),
  name_7679407273: z.string(),
  name_4064170156: z.string(),
});

export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      console.log(values);
      toast(
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      );
    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Failed to submit the form. Please try again.");
    }
  }

  return (
    <div className="flex lg:flex-row flex-col gap-y-10 justify-around">
      <div className="basis-4/12 space-y-10 animate-moveLeftToRight">
        <div className="dark:text-white mb-5">CONTACT INFO</div>
        <div className="flex flex-col gap-y-16">
          {iconContact.map((item, index) => (
            <div key={index} className="flex gap-x-5">
              <div className="bg-card-gradient rounded-xl p-7 flex justify-center items-center shadow-lg">
                <FontAwesomeIcon icon={item.icon} className="fa-2x" />
              </div>
              <div>
                <div className="text-secondary">{item.title}</div>
                <div>{item.data}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-x-10 items-center">
          {iconSocial.map((item, index) => (
            <Link
              href={item.href}
              key={index}
              target="_blank"
              className="rounded-full bg-card-gradient p-6 flex justify-center items-center shadow-lg dark:hover:brightness-75 hover:bg-black hover:text-white cursor-pointer"
            >
              <FontAwesomeIcon icon={item.icon} className="fa-2x" />
            </Link>
          ))}
        </div>
      </div>

      <div className="basis-5/12 bg-card-gradient rounded-xl p-10 animate-moveRightToLeft flex justify-center">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 w-full"
          >
            <FormField
              control={form.control}
              name="name_5367901925"
              render={() => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your name"
                      type="text"
                      className="h-[60px]"
                      defaultValue=""
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="name_7851597348"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your email"
                      type="email"
                      className="h-[60px]"
                      defaultValue={""}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="name_7679407273"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Subject</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your subject"
                      type="text"
                      className="h-[60px]"
                      defaultValue={""}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="name_4064170156"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Messages</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Your Messages" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              className="w-full"
              type="submit"
              variant={"secondary"}
              rounded={"lg"}
              size={"lg"}
            >
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
