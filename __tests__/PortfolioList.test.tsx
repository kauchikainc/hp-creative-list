import { render, screen } from '@testing-library/react'
import PortfolioList from '@/components/PortfolioList'
import { PortfolioItem } from '@/types/portfolio'

/**
 * PortfolioListコンポーネントのテスト
 * HP制作実績一覧の表示を検証
 */
describe('PortfolioList', () => {
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
      companyName: 'テスト自動車',
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

  it('すべての企業名が表示される', () => {
    render(<PortfolioList items={mockItems} />)
    expect(screen.getByText('テスト株式会社')).toBeInTheDocument()
    expect(screen.getByText('テスト自動車')).toBeInTheDocument()
    expect(screen.getByText('テストレストラン')).toBeInTheDocument()
  })

  it('すべてのカテゴリが表示される', () => {
    render(<PortfolioList items={mockItems} />)
    expect(screen.getByText('不動産')).toBeInTheDocument()
    expect(screen.getByText('中古車販売')).toBeInTheDocument()
    expect(screen.getByText('飲食店')).toBeInTheDocument()
  })

  it('アイテム数分のカードが表示される', () => {
    render(<PortfolioList items={mockItems} />)
    const cards = screen.getAllByTestId('portfolio-card')
    expect(cards).toHaveLength(3)
  })

  it('空配列の場合、「実績がありません」のメッセージが表示される', () => {
    render(<PortfolioList items={[]} />)
    expect(screen.getByText('実績がありません')).toBeInTheDocument()
  })

  it('各カードに「サイトを見る」リンクがある', () => {
    render(<PortfolioList items={mockItems} />)
    const links = screen.getAllByRole('link', { name: /サイトを見る/i })
    expect(links).toHaveLength(3)
  })
})
