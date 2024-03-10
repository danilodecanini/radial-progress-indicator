import type { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { ProgressIndicator, ProgressIndicatorColorType } from "~/ui/components";

type LoaderResult = {
  percentComplete: number;
  currentColor: ProgressIndicatorColorType
};

export const meta: MetaFunction = () => {
  return [
    { title: "Radial Progress Indicator" },
    { name: "description", content: "Radial Progress Indicator" },
  ];
};

export const loader =  async (): Promise<LoaderResult> => {
  return { percentComplete: 50, currentColor: 'blue' }
}

export default function Index() {
  const { percentComplete, currentColor } = useLoaderData<typeof loader>();
  
  return (
    <div className="h-screen flex items-center justify-center bg-slate-50">
      <ProgressIndicator {...{ percentComplete, color: currentColor }}/>
    </div>
  )
}
