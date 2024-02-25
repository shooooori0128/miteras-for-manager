# MiTERAS for Manager

![ロゴ](src/assets/logo.png)

MiTERAS for Manager は、MiTERAS の勤怠承認を脳死で行うための Chrome 拡張機能です。

## Chrome Extension URL

https://chromewebstore.google.com/detail/miteras-for-manager/gceenkojononeaakbbfbodpmmnacgcmh?hl=ja&authuser=0&pli=1

## Functions

### 日別勤怠承認画面

- 勤務時間のチェック: 勤務開始時間と終了時間が通常の勤務時間（10:00-22:00）を過ぎている場合、ハイライトします。
- 出社状況のチェック: 出社状況が「直行直帰・リモートワーク等」でない場合、ハイライトします。
- 実働時間とプロジェクト合計時間の一致チェック: 実働時間とプロジェクトの合計時間が一致しない場合、ハイライトします。
- プロジェクト名チェック: プロジェクト名が設定した除外対象のプロジェクト名一覧に含まれていない場合、ハイライトします。
- 勤務種別チェック: 勤務種別が「通常出勤」「法定休日」「所定休日」でない場合、ハイライトします。

## Install

1. このリポジトリをクローンまたはダウンロードします。
2. `yarn install`を実行して依存関係をインストールします。
3. `yarn build`を実行してプロジェクトをビルドします。
4. Chrome の拡張機能ページ（chrome://extensions/）を開き、デベロッパーモードを有効にします。
5. 「パッケージ化されていない拡張機能を読み込む」をクリックし、ビルドしたプロジェクトのディレクトリ（dist）を選択します。

## Usage

1. Chrome の拡張機能アイコンをクリックし、MiTERAS for Manager のオプションを選択します。
2. 「除外対象プロジェクト名一覧」にハイライトさせたくないプロジェクト名を入力します。

## License

MIT
