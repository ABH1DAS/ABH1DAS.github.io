import { Issue, Comment } from './types'

export const mockIssues: Issue[] = [
  {
    id: '1',
    title: 'Pothole on Main Street',
    description: 'Large pothole causing traffic hazards near the intersection of Main and Oak streets.',
    status: 'pending',
    priority: 'high',
    category: 'infrastructure',
    location: {
      address: '123 Main Street',
      coordinates: { lat: 40.7128, lng: -74.0060 }
    },
    citizenId: 'citizen1',
    images: ['/placeholder-1.jpg', '/placeholder-2.jpg'],
    createdAt: new Date('2025-10-30'),
    updatedAt: new Date('2025-10-30'),
    assignedTo: undefined
  },
  {
    id: '2',
    title: 'Street Light Out',
    description: 'Street light not functioning on Cedar Avenue, creating safety concerns at night.',
    status: 'in-progress',
    priority: 'medium',
    category: 'utilities',
    location: {
      address: '456 Cedar Avenue',
      coordinates: { lat: 40.7129, lng: -74.0061 }
    },
    citizenId: 'citizen2',
    images: ['/placeholder-3.jpg'],
    createdAt: new Date('2025-10-29'),
    updatedAt: new Date('2025-10-31'),
    assignedTo: 'staff1'
  },
  {
    id: '3',
    title: 'Illegal Dumping',
    description: 'Evidence of illegal dumping in Parker Park near the playground area.',
    status: 'resolved',
    priority: 'urgent',
    category: 'environment',
    location: {
      address: 'Parker Park, Pine Street',
      coordinates: { lat: 40.7130, lng: -74.0062 }
    },
    citizenId: 'citizen3',
    images: [],
    createdAt: new Date('2025-10-28'),
    updatedAt: new Date('2025-11-01'),
    assignedTo: 'staff2'
  }
]

export const mockComments: Comment[] = [
  {
    id: '1',
    issueId: '1',
    userId: 'staff1',
    content: 'Maintenance team has been notified and will assess the damage tomorrow morning.',
    isInternal: false,
    createdAt: new Date('2025-10-30T10:00:00')
  },
  {
    id: '2',
    issueId: '1',
    userId: 'staff2',
    content: 'Team scheduled for repair work next Tuesday.',
    isInternal: true,
    createdAt: new Date('2025-10-31T14:30:00')
  },
  {
    id: '3',
    issueId: '2',
    userId: 'staff1',
    content: 'Electrician dispatched to investigate the issue.',
    isInternal: false,
    createdAt: new Date('2025-10-29T16:45:00')
  }
]