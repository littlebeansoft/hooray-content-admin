import SectionList, { useGetSectionList } from 'components/Section/List'

const ContentPackTabsSection = () => {
  const { query, filter, pagination, onFilterChange, onTableChange } =
    useGetSectionList()

  const dataSource = query.data?.getSectionList.payload

  return (
    <SectionList
      loading={query.loading}
      filter={filter}
      dataSource={dataSource}
      pagination={pagination}
      onFilterChange={onFilterChange}
      onTableChange={onTableChange}
    />
  )
}

export default ContentPackTabsSection
