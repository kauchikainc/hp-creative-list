import { render, screen, fireEvent } from '@testing-library/react'
import PortfolioSearch from '@/components/PortfolioSearch'
import { PortfolioItem } from '@/types/portfolio'

/**
 * PortfolioSearchコンポーネントのテスト
 * 企業名検索機能の動作を検証
 */
describe('PortfolioSearch', () => {
  // テスト用のサンプルデータ
  const mockItems: PortfolioItem[] = [
    {
      id: 'test-001',
      companyName: 'テスト株式会社',
      category: '不動産',
      url: 'https://example.com/test1',
      thumbnail: '/images/portfolio/test1.jpg',
    },
    {
      id: 'test-002',
      companyName: 'サンプル自動車',
      category: '中古車販売',
      url: 'https://example.com/test2',
    },
    {
      id: 'test-003',
      companyName: 'テストレストラン',
      category: '飲食店',
      url: 'https://example.com/test3',
      thumbnail: '/images/portfolio/test3.jpg',
    },
  ]

  it('検索入力欄が表示される', () => {
    render(<PortfolioSearch items={mockItems} />)
    const searchInput = screen.getByPlaceholderText('企業名で検索...')
    expect(searchInput).toBeInTheDocument()
  })

  it('初期状態ですべてのアイテムが表示される', () => {
    render(<PortfolioSearch items={mockItems} />)
    expect(screen.getByText('テスト株式会社')).toBeInTheDocument()
    expect(screen.getByText('サンプル自動車')).toBeInTheDocument()
    expect(screen.getByText('テストレストラン')).toBeInTheDocument()
  })

  it('検索キーワードに一致する企業のみ表示される', () => {
    render(<PortfolioSearch items={mockItems} />)
    const searchInput = screen.getByPlaceholderText('企業名で検索...')

    // 「テスト」で検索
    fireEvent.change(searchInput, { target: { value: 'テスト' } })

    // 「テスト」を含む企業名が表示される
    expect(screen.getByText('テスト株式会社')).toBeInTheDocument()
    expect(screen.getByText('テストレストラン')).toBeInTheDocument()
    // 「サンプル」は非表示
    expect(screen.queryByText('サンプル自動車')).not.toBeInTheDocument()
  })

  it('検索キーワードに一致するものがない場合、メッセージが表示される', () => {
    render(<PortfolioSearch items={mockItems} />)
    const searchInput = screen.getByPlaceholderText('企業名で検索...')

    // 存在しないキーワードで検索
    fireEvent.change(searchInput, { target: { value: '存在しない企業' } })

    expect(screen.getByText('検索結果がありません')).toBeInTheDocument()
  })

  it('検索キーワードをクリアするとすべてのアイテムが表示される', () => {
    render(<PortfolioSearch items={mockItems} />)
    const searchInput = screen.getByPlaceholderText('企業名で検索...')

    // 検索してからクリア
    fireEvent.change(searchInput, { target: { value: 'テスト' } })
    fireEvent.change(searchInput, { target: { value: '' } })

    // すべて表示される
    expect(screen.getByText('テスト株式会社')).toBeInTheDocument()
    expect(screen.getByText('サンプル自動車')).toBeInTheDocument()
    expect(screen.getByText('テストレストラン')).toBeInTheDocument()
  })

  it('大文字小文字を区別せずに検索できる', () => {
    const itemsWithEnglish: PortfolioItem[] = [
      ...mockItems,
      {
        id: 'test-004',
        companyName: 'ABC Corporation',
        category: 'IT',
        url: 'https://example.com/test4',
      },
    ]
    render(<PortfolioSearch items={itemsWithEnglish} />)
    const searchInput = screen.getByPlaceholderText('企業名で検索...')

    // 小文字で検索
    fireEvent.change(searchInput, { target: { value: 'abc' } })

    expect(screen.getByText('ABC Corporation')).toBeInTheDocument()
  })

  it('検索結果の件数が表示される', () => {
    render(<PortfolioSearch items={mockItems} />)
    const searchInput = screen.getByPlaceholderText('企業名で検索...')

    // 「テスト」で検索（2件ヒット）
    fireEvent.change(searchInput, { target: { value: 'テスト' } })

    expect(screen.getByText('2件の実績')).toBeInTheDocument()
  })
})
