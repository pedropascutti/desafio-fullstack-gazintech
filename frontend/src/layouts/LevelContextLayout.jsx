import { Outlet } from "react-router-dom"
import { LevelProvider } from "../Context/LevelContext"

export const LevelContextLayout = () => {
  return (
    <LevelProvider>
        <Outlet />
    </LevelProvider>
  )
}
