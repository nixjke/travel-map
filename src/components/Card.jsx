import React from 'react'
import { Card, Select, Button } from 'antd'

export default function TravelCard() {
  const { Option } = Select

  function handleChange(value) {
    console.log(`selected ${value}`)
  }

  return (
    <Card className="w-full" title={`Supply №`}>
      <div className="flex justify-between">
        <p>Loading</p>
        <Select className="w-36" defaultValue="lucy" onChange={handleChange}>
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="disabled" disabled>
            Disabled
          </Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>
      </div>
      <div className="flex justify-between">
        <p>Unloading</p>
        <Select className="w-36" defaultValue="lucy" onChange={handleChange}>
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="disabled" disabled>
            Disabled
          </Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>
      </div>
      <Button className="w-full mt-4">
        Apply
      </Button>
    </Card>
  )
}
