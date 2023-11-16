import sqlite3
from utils import dict_factory

def get_person_info ():
    connection = sqlite3.connect('cv.db')
    connection.row_factory = dict_factory
    cursor = connection.cursor()
    cursor.execute('SELECT * FROM Person')
    info = cursor.fetchone()

    connection.close()
    return info

if __name__ == "__main__":
    print(get_person_info())