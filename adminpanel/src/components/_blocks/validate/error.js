/* eslint-disable react/prop-types */
import React from 'react';
import { Form, Icon, Input, Button, Checkbox, Select } from 'antd'
import keys from './../../../_helpers/generator/generateKey';
class FormCustomValid extends React.Component {
  // componentDidUpdate(prevProps) {
  //   const { value, set } = this.props
  //   prevProps !== this.props ? set(value) : console.log('null')
  // }
  render() {
    let {
      settings: {
        title,
        buttons,
        field: { fullName, contract, selectName },
        selectOptions,
      },
      handlers: { submit, change, click },
      state: { name, position, contractor },
      errorText, len
    } = this.props
    console.log(this.props)
    const { Option } = Select
    // const { getFieldDecorator } = this.props.form
    return (
      // <ValidateFieldInput len={10} data={5} errorText={`Меньше чем`} />
      <Form onSubmit={this.submit} className="form-employee">
        <Form.Item className="form-title">
          <i className="fa-icon">
            {/* <FontAwesomeIcon icon={faUserPlus} /> */}
            <Icon type="user-add" />
          </i>
          {title}
        </Form.Item>
        <Form.Item>
          <Input
            className='input-no-valid'
            name="name"
            onChange={change}
            type="text"
            placeholder={fullName}
            value={name}

          /> <label htmlFor="name">{errorText}: {len}</label>
          {/* <ValidateForm value={name} errorText={`Меньше чем`} len={5} /> */}
          {/* {getFieldDecorator('name', {
      			// getValueProps: e => submit(e),
      			initialValue: name,
      			rules: [
      				{ required: true, message: 'Пожалуйста введите ФИО сотрудника' },
      			],
      		})(
      			<Input
      				name='name'
      				onChange={change}
      				type='text'
      				placeholder={fullName}
      			/>
      		)} */}
        </Form.Item>
        <Form.Item>
          <Select placeholder={selectName} onChange={change}>
            <Option value="default" name="default" disabled="disabled">
              {position}
            </Option>
            {selectOptions.map((option, index) => (
              <Option key={keys[index]} value={option}>
                {option}
              </Option>
            ))}
          </Select>
          {/* {getFieldDecorator('position', {
      			initialValue: position || selectName,
      			rules: [
      				{ required: true, message: 'Пожалуйста выберите должность' },
      			],
      		})(

      		)} */}
        </Form.Item>
        <Form.Item>
          {/* {getFieldDecorator('contractor', {
      			valuePropName: 'checked',
      			initialValue: contractor,
      		})()} */}
          <Checkbox
            name="contractor"
            checked={contractor}
            className="checkbox"
            onChange={change}
          >
            {contract}
          </Checkbox>
        </Form.Item>
        <Form.Item>
          {buttons.map((button, index) => (
            <Button
              type="primary"
              ghost
              htmlType="submit"
              className="button-green"
              key={keys[index]}
              // onClick={this.validate}
              data-action={button.action}
            >
              {button.text}
            </Button>
          ))}
        </Form.Item>
      </Form>
    )
  }
}

export default FormCustomValid