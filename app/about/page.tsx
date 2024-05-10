import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Me",
  description: "Information about me",
};

export default async function AboutPage() {
  return (
    <div className="container max-w-6xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-x-4">
          <h1 className="inline-block font-black text-4xl lg:text-5xl">
            About Me
          </h1>
        </div>
      </div>
      <hr className="my-8" />
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        <div className="min-w-48 max-w-48 flex flex-col gap-2">
          <Avatar className="h-48 w-48">
            <AvatarImage src="/avatar.jpg" alt={siteConfig.author} />
            <AvatarFallback>DS</AvatarFallback>
          </Avatar>
          <h2 className="text-2xl font-bold text-center break-words">
            {siteConfig.author}
          </h2>
          <p className="text-muted-foreground text-center break-words">
            Sitecore Developer
          </p>
        </div>
        <p className="text-muted-foreground text-lg py-4">
        As a Sitecore-certified developer with 12 years of experience developing Sitecore solutions, I’ve launched this blog to share the knowledge I’ve accumulated. It’s a platform for me to explore and discuss emerging trends and learnings.
        <br />
        <br />
        My passion for fullstack development often leads me to tinker with projects in my free time, which inspired me to develop this streamlined blog utilizing Next.js, which I plan to continue to tinker on. With Sitecore’s progressive shift towards XM Cloud, I find myself at the crossroads of my Sitecore and fullstack expertise. I’m thrilled about the prospect of blending these two realms and am eager to share this journey with you.
        <br />
        <br />
        To checkout the source code for this blog, visit my <a className={cn(buttonVariants({ variant: "link" }), "py-0 px-0 text-lg")} href="https://github.com/twofoldtech-dakota/SitecoreBits">Github</a> repository.
        <br />
        <br />
        Contact me <a className={cn(buttonVariants({ variant: "link" }), "py-0 px-0 text-lg")} href="mailto:dakota@twofold.tech">here</a>.
        </p>
      </div>
    </div>
  );
}
