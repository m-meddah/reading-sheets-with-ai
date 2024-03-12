import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const formSchema = z.object({
  title: z.string(),
  author: z.string(),
  level: z.string(),
});

export function AIForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col gap-4'>
          <FormField
            control={form.control}
            name="title"
            defaultValue=""
            render={({ field }) => (
                <FormItem>
                  <FormLabel>Titre</FormLabel>
                  <FormControl>
                    <Input placeholder="Titre" {...field}/>
                  </FormControl>
                </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="author"
            defaultValue=""
            render={({ field }) => (
                <FormItem>
                  <FormLabel>Auteur</FormLabel>
                  <FormControl>
                    <Input placeholder="Auteur" {...field}/>
                  </FormControl>
                </FormItem>
            )}
          />
          <FormField
          control={form.control}
          name="level"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Niveau</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selectionnez votre niveau d'étude" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="College">College</SelectItem>
                  <SelectItem value="Lycée">Lycée</SelectItem>
                  <SelectItem value="Université">Université</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}
