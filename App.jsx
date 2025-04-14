import { useState } from 'react'

export default function App() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    alert('تم إرسال رسالتك بنجاح!')
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <div style={{ fontFamily: 'Arial', textAlign: 'center', padding: 20 }}>
      <h1>MBC Industrial</h1>
      <p>حلول صناعية متقدمة</p>
      <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: 'auto' }}>
        <input name="name" placeholder="الاسم" value={form.name} onChange={handleChange} style={{ width: '100%', padding: 8, margin: '8px 0' }} />
        <input name="email" placeholder="البريد الإلكتروني" value={form.email} onChange={handleChange} style={{ width: '100%', padding: 8, margin: '8px 0' }} />
        <textarea name="message" placeholder="رسالتك" value={form.message} onChange={handleChange} rows={4} style={{ width: '100%', padding: 8, margin: '8px 0' }}></textarea>
        <button type="submit" style={{ padding: 10, backgroundColor: '#ffc107', border: 'none', cursor: 'pointer' }}>إرسال</button>
      </form>
    </div>
  )
}
