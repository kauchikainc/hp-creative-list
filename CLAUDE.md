# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要

HP制作受託事業の制作実績を一覧表示するWebアプリケーション。企業名での検索機能付き。

## コマンド

```bash
npm run dev      # 開発サーバー起動
npm run build    # 本番ビルド
npm test         # 全テスト実行
npm test [name]  # 特定のテストファイル実行（例: npm test PortfolioSearch）
npm run lint     # ESLint実行
```

## アーキテクチャ

### データフロー

```
src/data/portfolio.json  →  page.tsx  →  PortfolioSearch  →  PortfolioList  →  PortfolioCard
      (実績データ)         (Server)      (Client)           (表示)            (個別カード)
```

### 主要コンポーネント

- **PortfolioSearch**: 検索機能を持つクライアントコンポーネント（`'use client'`）
- **PortfolioList**: 実績をグリッドレイアウトで表示
- **PortfolioCard**: 個別の実績カード（サムネイル画像 or iframeプレビュー）

### データ構造

`src/data/portfolio.json` でHP一覧を管理:
```typescript
interface PortfolioItem {
  id: string           // 一意識別子
  companyName: string  // 企業名/屋号名
  category: string     // カテゴリ（業種）
  url: string          // HPのURL
  thumbnail?: string   // サムネイル画像パス（省略時はiframeで表示）
}
```

### サムネイル画像

- 配置場所: `public/images/portfolio/`
- X-Frame-Optionsでiframe埋め込みが禁止されているサイトはスクリーンショットを使用

## テスト

Jest + React Testing Libraryを使用。テストファイルは `__tests__/` に配置。
