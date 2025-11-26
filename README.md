# HP制作実績一覧

HP制作受託事業の制作実績を一覧表示するWebアプリケーション。

## 技術スタック

- Next.js 16 (App Router)
- React 19
- TypeScript 5
- Tailwind CSS 4
- Jest + React Testing Library

## セットアップ

```bash
npm install
npm run dev
```

http://localhost:3000 で確認できます。

## コマンド

| コマンド | 説明 |
|---------|------|
| `npm run dev` | 開発サーバー起動 |
| `npm run build` | 本番ビルド |
| `npm start` | 本番サーバー起動 |
| `npm test` | 全テスト実行 |
| `npm test [name]` | 特定テスト実行 |
| `npm run lint` | ESLint実行 |

## ディレクトリ構成

```
src/
├── app/
│   ├── layout.tsx      # ルートレイアウト
│   └── page.tsx        # トップページ（実績一覧）
├── components/
│   ├── PortfolioCard.tsx    # 個別実績カード
│   ├── PortfolioList.tsx    # 実績グリッド表示
│   └── PortfolioSearch.tsx  # 検索機能付き一覧
├── data/
│   └── portfolio.json  # 実績データ
└── types/
    └── portfolio.ts    # 型定義

__tests__/              # テストファイル
public/images/portfolio/ # サムネイル画像
```

## 実績データの管理

`src/data/portfolio.json` を編集して実績を追加・変更します。

```json
{
  "id": "company-id",
  "companyName": "企業名/屋号名",
  "category": "業種",
  "url": "https://example.com",
  "thumbnail": "/images/portfolio/company-id.jpg"
}
```

| フィールド | 必須 | 説明 |
|-----------|------|------|
| `id` | Yes | 一意識別子（URLから生成推奨） |
| `companyName` | Yes | 企業名/屋号名 |
| `category` | Yes | 業種カテゴリ |
| `url` | Yes | HPのURL |
| `thumbnail` | No | サムネイル画像パス |

### プレビュー表示について

- `thumbnail` がある場合: 画像を表示
- `thumbnail` がない場合: iframeでサイトをプレビュー表示

多くのサイトは `X-Frame-Options` でiframe埋め込みを禁止しているため、表示が崩れる場合はスクリーンショットを `public/images/portfolio/` に保存し、`thumbnail` を指定してください。

## デプロイ

GitHubへpushすると、Netlifyで自動デプロイされます。
