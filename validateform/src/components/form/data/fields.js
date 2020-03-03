import React from 'react'
import { Input } from 'antd'
import catchError from './../../../helpers/HOCFunction/vaidate/catchError'

const InputName = catchError(
  <Input key="name" name="name" placeholder="Name" />
)
const InputPassword = catchError(
  <Input key="password" name="password" placeholder="Password" />
)
const InputEmail = catchError(
  <Input key="email" name="email" placeholder="Email" />
)
const Fields = [InputName, InputPassword, InputEmail]

export default Fields
