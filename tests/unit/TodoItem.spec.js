import { mount } from '@vue/test-utils'
import TodoItem from '@/components/TodoItem.vue'

describe('TodoItem', () => {
  it('renders todo item correctly', () => {
    const todo = { id: 1, title: 'Test Todo', completed: false }
    const wrapper = mount(TodoItem, {
      props: { todo }
    })

    expect(wrapper.text()).toContain('Test Todo')
    expect(wrapper.find('input[type="checkbox"]').element.checked).toBe(false)
  })

  it('emits update event when checkbox is clicked', async () => {
    const todo = { id: 1, title: 'Test Todo', completed: false }
    const wrapper = mount(TodoItem, {
      props: { todo }
    })

    await wrapper.find('input[type="checkbox"]').setChecked()

    expect(wrapper.emitted('update')).toBeTruthy()
    expect(wrapper.emitted('update')[0][0]).toEqual({ ...todo, completed: true })
  })

  it('emits delete event when delete button is clicked', async () => {
    const todo = { id: 1, title: 'Test Todo', completed: false }
    const wrapper = mount(TodoItem, {
      props: { todo }
    })

    await wrapper.find('button').trigger('click')

    expect(wrapper.emitted('delete')).toBeTruthy()
    expect(wrapper.emitted('delete')[0]).toEqual([1])
  })
})