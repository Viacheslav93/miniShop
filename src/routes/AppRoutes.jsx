import { Route, Routes } from "react-router-dom/dist"

import { Layout } from "../layout/Layout"
import { publicRoutes } from "./dataRoutes"
import { NotFound } from "../pages/error/NotFound"


export const AppRoutes = () => {

  return (
 
      <Routes>
         <Route path="/" element={<Layout />}>

            { 
            publicRoutes.map(({pathname, component}) =>            
                <Route key={pathname} path={pathname} element={component} />
              )
            }

            <Route path="*" element={<NotFound />} />

         </Route>
      </Routes> 
  )
}
