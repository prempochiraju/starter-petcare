from graphviz import Digraph

# Create a new ER Diagram
er = Digraph('ER Diagram', format='png')
er.attr(size='10')

# Entities
er.node('User', shape='rectangle')
er.node('Caregiver', shape='rectangle')
er.node('Service', shape='rectangle')
er.node('Booking', shape='rectangle')
er.node('Payment', shape='rectangle')

# Attributes (simplified for clarity)
er.node('UserID', shape='ellipse')
er.node('Name', shape='ellipse')
er.node('Email', shape='ellipse')
er.node('Phone', shape='ellipse')
er.node('CaregiverID', shape='ellipse')
er.node('ServiceID', shape='ellipse')
er.node('BookingID', shape='ellipse')
er.node('PaymentID', shape='ellipse')
er.node('Amount', shape='ellipse')
er.node('Status', shape='ellipse')

# Relationships
er.edge('User', 'UserID', label='PK')
er.edge('User', 'Name')
er.edge('User', 'Email')
er.edge('User', 'Phone')

er.edge('Caregiver', 'CaregiverID', label='PK')

er.edge('Service', 'ServiceID', label='PK')
er.edge('Service', 'Caregiver', label='Provided by')

er.edge('Booking', 'BookingID', label='PK')
er.edge('Booking', 'User', label='Made by')
er.edge('Booking', 'Service', label='For')
er.edge('Booking', 'Status')

er.edge('Payment', 'PaymentID', label='PK')
er.edge('Payment', 'Booking', label='For')
er.edge('Payment', 'Amount')

# Render the diagram
er_path = "/mnt/data/er_diagram_pet_care.png"
er.render(er_path, format='png', cleanup=True)

# Display the diagram
er_path
