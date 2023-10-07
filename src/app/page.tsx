import MyDropzone from "@/components/dropzone"
import SectionWrapper from "@/components/layout/section-wrapper"

export default function IndexPage() {
  return (
    <SectionWrapper className="flex-col justify-center">
      <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight lg:text-5xl">
        Drag and drop your PDF here
      </h1>

      <MyDropzone />
    </SectionWrapper>
  )
}
