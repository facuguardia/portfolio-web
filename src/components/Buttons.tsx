import React from 'react'
import { RiDownload2Line } from "react-icons/ri";

interface ButtonsProps {
  title: string;
  styles?: string;
}

export const Buttons = ({title, styles}: ButtonsProps) => {
  return (
    <>
    <button className={styles}>{title}<RiDownload2Line /></button>
  </>
  )
}
