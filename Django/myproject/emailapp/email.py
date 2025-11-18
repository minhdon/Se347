class Email:
    def __init__(self,id,title,description,time,status):
        self.id=id
        self.title=title
        self.description=description
        self.time=time
        self.status=status
EMAIL_STORE=[ Email(0,'Thong bao lich phong van','Phong van luc 14h','04/05/2025',False),
        Email(1,'Ket qua  phong van','Chuc mung ban','04/05/2025',True),
        Email(2,'Thong bao lich lam viec','Thu 2 - thu 6','04/05/2025',True)
        ]
def get_Email_list():
    return EMAIL_STORE

def get_Email_by_id(id):
    emails=get_Email_list()
    return emails[id]
def  delete_Email_by_id(id):
    global EMAIL_STORE
    EMAIL_STORE=[email for email in EMAIL_STORE if email.id != id]
def generate_new_id():
    """Tạo ID mới bằng cách tìm ID lớn nhất hiện có và + 1."""
    if not EMAIL_STORE:
        return 1

    max_id = max(email.id for email in EMAIL_STORE)
    return max_id + 1


def add_new_email(title, description, time):
    global EMAIL_STORE
    new_id = generate_new_id()

    new_email = Email(new_id, title, description, time, False)
    

    EMAIL_STORE.append( new_email) 
    return new_email