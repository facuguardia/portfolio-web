import React from 'react'
import { RiDownload2Line } from "react-icons/ri";

interface Props {
  title: string;
  styles?: string;
}

export const Buttons = ({title, styles}: Props) => {
  return (
    <>
    <button className={styles}>{title}<RiDownload2Line /></button>
  </>
  )
}
