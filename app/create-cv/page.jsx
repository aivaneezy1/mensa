"use client"
import CreateCv from "../components/CreateCv"
import ClientOnly from "../components/ClientOnly"


const CreateCvpage = () => {
  return (
    <div>
      <ClientOnly>
        <CreateCv/>
      </ClientOnly>
    </div>
  )
}
export default CreateCvpage
