import { mount } from '@vue/test-utils'
import TodoForm from '@/components/TodoForm.vue'

describe('TodoForm', () => {
  it('emits add-todo event with input value when form is submitted', async () => {
    const wrapper = mount(TodoForm)
    const input = wrapper.find('input')
    const form = wrapper.find('form')

    await input.setValue('New Todo')
    await form.trigger('submit')

    expect(wrapper.emitted('add-todo')).toBeTruthy()
    expect(wrapper.emitted('add-todo')[0]).toEqual(['New Todo'])
  })

  it('clears input after form submission', async () => {
    const wrapper = mount(TodoForm)
    const input = wrapper.find('input')
    const form = wrapper.find('form')

    await input.setValue('New Todo')
    await form.trigger('submit')

    expect(input.element.value).toBe('')
  })
})