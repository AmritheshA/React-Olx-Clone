import React from 'react'
import Card from '../Card'

function RecentlyAdded() {
  return (
    <div className="mx-28 my-20">
    <div className="flex justify-between">
      <h2 className="text-3xl font-medium mb-3">Recently Added</h2>
    </div>
    <div className="flex overflow-scroll max-w-[100%]">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  </div>
  )
}

export default RecentlyAdded
