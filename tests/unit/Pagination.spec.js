import { mount } from '@vue/test-utils'
import Pagination from '@/components/Pagination.vue'

describe('Pagination', () => {
  it('disables previous button on first page', () => {
    const wrapper = mount(Pagination, {
      props: { currentPage: 1, totalPages: 5 }
    })

    expect(wrapper.find('button:first-child').attributes('disabled')).toBeDefined()
  })

  it('disables next button on last page', () => {
    const wrapper = mount(Pagination, {
      props: { currentPage: 5, totalPages: 5 }
    })

    expect(wrapper.find('button:last-child').attributes('disabled')).toBeDefined()
  })

  it('emits changePage event with correct value when buttons are clicked', async () => {
    const wrapper = mount(Pagination, {
      props: { currentPage: 2, totalPages: 5 }
    })

    await wrapper.find('button:first-child').trigger('click')
    expect(wrapper.emitted('changePage')[0]).toEqual([1])

    await wrapper.find('button:last-child').trigger('click')
    expect(wrapper.emitted('changePage')[1]).toEqual([3])
  })
})