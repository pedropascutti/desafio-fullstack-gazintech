import { Outlet } from "react-router-dom"
import { DeveloperProvider } from "../Context/DeveloperContext"

export const DeveloperContextLayout = () => {
  return (
    <DeveloperProvider>
        <Outlet />
    </DeveloperProvider>
  )
}
