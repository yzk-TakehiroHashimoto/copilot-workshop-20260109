#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
シンプルなTodo管理CLIツール
"""

import json
import argparse
import os
import sys

TODO_FILE = 'todo.json'


def load_todos():
    """todo.jsonファイルからTodoリストを読み込む"""
    if not os.path.exists(TODO_FILE):
        return []
    
    try:
        with open(TODO_FILE, 'r', encoding='utf-8') as f:
            return json.load(f)
    except json.JSONDecodeError:
        return []


def save_todos(todos):
    """todo.jsonファイルにTodoリストを保存する"""
    with open(TODO_FILE, 'w', encoding='utf-8') as f:
        json.dump(todos, f, ensure_ascii=False, indent=2)


def get_next_id(todos):
    """次のTodo IDを取得する（最大ID + 1）"""
    if not todos:
        return 1
    return max(todo['id'] for todo in todos) + 1


def add_todo(task):
    """新しいTodoを追加する"""
    todos = load_todos()
    new_todo = {
        'id': get_next_id(todos),
        'task': task,
        'completed': False
    }
    todos.append(new_todo)
    save_todos(todos)
    print(f'追加しました: [{new_todo["id"]}] {task}')


def list_todos():
    """Todoリストを表示する"""
    todos = load_todos()
    
    if not todos:
        print('Todoリストは空です')
        return
    
    for todo in todos:
        status = '[x]' if todo['completed'] else '[ ]'
        print(f'{status} [{todo["id"]}] {todo["task"]}')


def mark_done(todo_id):
    """指定したIDのTodoを完了にする"""
    todos = load_todos()
    
    for todo in todos:
        if todo['id'] == todo_id:
            todo['completed'] = True
            save_todos(todos)
            print(f'完了しました: [{todo_id}] {todo["task"]}')
            return
    
    print(f'エラー: ID {todo_id} のTodoが見つかりません')
    sys.exit(1)


def delete_todo(todo_id):
    """指定したIDのTodoを削除する"""
    todos = load_todos()
    
    for i, todo in enumerate(todos):
        if todo['id'] == todo_id:
            deleted_task = todo['task']
            todos.pop(i)
            save_todos(todos)
            print(f'削除しました: [{todo_id}] {deleted_task}')
            return
    
    print(f'エラー: ID {todo_id} のTodoが見つかりません')
    sys.exit(1)


def main():
    """メイン関数"""
    parser = argparse.ArgumentParser(description='シンプルなTodo管理CLIツール')
    subparsers = parser.add_subparsers(dest='command', help='利用可能なコマンド')
    
    # addコマンド
    parser_add = subparsers.add_parser('add', help='新しいTodoを追加')
    parser_add.add_argument('task', help='追加するタスク内容')
    
    # listコマンド
    subparsers.add_parser('list', help='Todoリストを表示')
    
    # doneコマンド
    parser_done = subparsers.add_parser('done', help='Todoを完了にする')
    parser_done.add_argument('id', type=int, help='完了にするTodoのID')
    
    # deleteコマンド
    parser_delete = subparsers.add_parser('delete', help='Todoを削除')
    parser_delete.add_argument('id', type=int, help='削除するTodoのID')
    
    args = parser.parse_args()
    
    if args.command == 'add':
        add_todo(args.task)
    elif args.command == 'list':
        list_todos()
    elif args.command == 'done':
        mark_done(args.id)
    elif args.command == 'delete':
        delete_todo(args.id)
    else:
        parser.print_help()


if __name__ == '__main__':
    main()
