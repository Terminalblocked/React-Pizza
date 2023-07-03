import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={280}
    height={458}
    viewBox="0 0 280 458"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="135" cy="112" r="106" /> 
    <rect x="8" y="233" rx="10" ry="10" width="254" height="19" /> 
    <rect x="7" y="271" rx="15" ry="15" width="258" height="68" /> 
    <rect x="6" y="368" rx="10" ry="10" width="95" height="30" /> 
    <rect x="116" y="362" rx="15" ry="15" width="152" height="45" />
  </ContentLoader>
)

export default Skeleton;

