import { render, screen } from '@testing-library/react'
import PortfolioCard from '@/components/PortfolioCard'
import { PortfolioItem } from '@/types/portfolio'

/**
 * PortfolioCardコンポーネントのテスト
 * 個別のHP制作実績カードの表示を検証
 */
describe('PortfolioCard', () => {
  // テスト用のサンプルデータ
  const mockItem: PortfolioItem = {
    id: 'test-001',
    companyName: 'テスト株式会社',
    category: '不動産',
    url: 'https://example.com/test',
    thumbnail: '/images/portfolio/test.jpg',
  }

  // サムネイルなしのデータ
  const mockItemWithoutThumbnail: PortfolioItem = {
    id: 'test-002',
    companyName: 'テスト自動車',
    category: '中古車販売',
    url: 'https://example.com/test2',
  }

  it('企業名が表示される', () => {
    render(<PortfolioCard item={mockItem} />)
    expect(screen.getByText('テスト株式会社')).toBeInTheDocument()
  })

  it('カテゴリ（業種）が表示される', () => {
    render(<PortfolioCard item={mockItem} />)
    expect(screen.getByText('不動産')).toBeInTheDocument()
  })

  it('HPへのリンクが正しいURLを持つ', () => {
    render(<PortfolioCard item={mockItem} />)
    const link = screen.getByRole('link', { name: /サイトを見る/i })
    expect(link).toHaveAttribute('href', 'https://example.com/test')
  })

  it('サムネイル画像がある場合、画像が表示される', () => {
    render(<PortfolioCard item={mockItem} />)
    const image = screen.getByRole('img')
    expect(image).toBeInTheDocument()
  })

  it('サムネイルがない場合、iframeでプレビューが表示される', () => {
    render(<PortfolioCard item={mockItemWithoutThumbnail} />)
    const iframe = screen.getByTestId('portfolio-preview-iframe')
    expect(iframe).toBeInTheDocument()
    expect(iframe).toHaveAttribute('src', 'https://example.com/test2')
  })
})
