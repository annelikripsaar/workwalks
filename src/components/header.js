import React from "react"
import GalleryMarquee from "./GalleryMarquee"

export default function Header({ className }) {
  return (
    <GalleryMarquee
      className={className}
      isHeader={true}
      marqueeHeight="160px"
      images={["/assets/header.png"]}
    />
  )
}
