import React from "react"
import ContentLoader from "react-content-loader"
export const MyLoader = (props: any):any => {
return <ContentLoader 
    speed={2}
    width={260}
    height={560}
    viewBox="0 0 260 560"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="120" cy="130" r="105" /> 
    <rect x="6" y="291" rx="0" ry="0" width="237" height="38" /> 
    <rect x="8" y="359" rx="0" ry="0" width="239" height="87" /> 
    <rect x="10" y="476" rx="0" ry="0" width="241" height="52" />

  </ContentLoader>
}