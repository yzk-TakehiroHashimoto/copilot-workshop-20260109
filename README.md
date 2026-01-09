# copilot-workshop-20260109

GitHub Copilotのワークショップ用リポジトリです。JavaScriptとPythonを使用したサンプルコードが含まれています。

## 📋 目次

- [プロジェクト概要](#プロジェクト概要)
- [含まれているファイル](#含まれているファイル)
- [必要な環境](#必要な環境)
- [セットアップ](#セットアップ)
- [使い方](#使い方)
- [テストの実行](#テストの実行)

## プロジェクト概要

このリポジトリはGitHub Copilotのワークショップで使用するためのサンプルコード集です。以下のコンポーネントが含まれています：

- **FizzBuzz実装**（JavaScript）
- **Todo管理CLIツール**（Python）
- **基本的なJavaScriptサンプル**

## 含まれているファイル

### JavaScript ファイル

- `fizzbuzz.js` - FizzBuzzアルゴリズムの実装
- `fizzbuzz.test.js` - FizzBuzzのJestテスト
- `1.js` - 簡単な足し算関数の例
- `2.js` - Studentクラスの実装例

### Python ファイル

- `todo.py` - シンプルなTodo管理CLIツール

### 設定ファイル

- `package.json` - Node.jsプロジェクトの設定
- `package-lock.json` - 依存関係のロックファイル

## 必要な環境

- Node.js (v12以上推奨)
- npm
- Python 3.x (todo.pyを使用する場合)

## セットアップ

1. リポジトリをクローン：
```bash
git clone https://github.com/yzk-TakehiroHashimoto/copilot-workshop-20260109.git
cd copilot-workshop-20260109
```

2. 依存関係をインストール：
```bash
npm install
```

## 使い方

### FizzBuzz

FizzBuzzプログラムを実行：
```bash
node fizzbuzz.js
```

1から20までの数字に対してFizzBuzzを実行し、結果を表示します。

### Todo管理ツール

Todo管理CLIツールの使い方：

#### Todoを追加
```bash
python3 todo.py add "買い物に行く"
```

#### Todoリストを表示
```bash
python3 todo.py list
```

#### Todoを完了にする
```bash
python3 todo.py done 1
```

#### Todoを削除
```bash
python3 todo.py delete 1
```

### その他のサンプル

#### 足し算関数
```bash
node 1.js
```

#### Studentクラス
```bash
node 2.js
```

## テストの実行

Jestテストを実行：
```bash
npm test
```

FizzBuzzの実装に対する包括的なテストが実行されます。

## ライセンス

ISC