import React from 'react'

export default function Profile() {
  return (
    <div className="profile-page">
      <h2>Personal Information</h2>
      <form>
        <div>
          <label>Profile Photo:</label>
          <input type="file" />
        </div>

        <div>
          <label>Full Name:</label>
          <input type="text" />
        </div>

        <div>
          <label>Registration / Register Number:</label>
          <input type="text" />
        </div>

        <div>
          <label>Date of Birth:</label>
          <input type="date" />
        </div>

        <div>
          <label>Age:</label>
          <input type="number" />
        </div>

        <div>
          <label>Gender:</label>
          <input type="text" />
        </div>

        <div>
          <label>Blood Group:</label>
          <input type="text" />
        </div>

        <div>
          <label>Phone Number:</label>
          <input type="tel" />
        </div>

        <div>
          <label>Email Address:</label>
          <input type="email" />
        </div>

        <div>
          <label>Address:</label>
          <textarea rows={4} cols={40} />
        </div>

        <h2>Parent / Guardian Details</h2>

        <div>
          <label>Father's Name:</label>
          <input type="text" />
        </div>

        <div>
          <label>Father's Occupation:</label>
          <input type="text" />
        </div>

        <div>
          <label>Father's Contact Number:</label>
          <input type="tel" />
        </div>

        <div>
          <label>Mother's Name:</label>
          <input type="text" />
        </div>

        <div>
          <label>Mother's Occupation:</label>
          <input type="text" />
        </div>

        <div>
          <label>Mother's Contact Number:</label>
          <input type="tel" />
        </div>

        <div>
          <label>Emergency Contact Number:</label>
          <input type="tel" />
        </div>

        <div>
          <label>Parent/Guardian Email:</label>
          <input type="email" />
        </div>

        <h2>Academic Background</h2>

        <div>
          <label>Current College Name:</label>
          <input type="text" />
        </div>

        <div>
          <label>Program / Course:</label>
          <input type="text" />
        </div>

        <div>
          <label>Department:</label>
          <input type="text" />
        </div>

        <div>
          <label>Year of Study:</label>
          <input type="text" />
        </div>

        <div>
          <label>CGPA / GPA:</label>
          <input type="text" />
        </div>

        <h2>School Details</h2>

        <h3>10th Standard</h3>
        <div>
          <label>School Name:</label>
          <input type="text" />
        </div>

        <div>
          <label>Year of Passing:</label>
          <input type="text" />
        </div>

        <div>
          <label>Marks / Percentage:</label>
          <input type="text" />
        </div>

        <h3>12th Standard</h3>
        <div>
          <label>School Name:</label>
          <input type="text" />
        </div>

        <div>
          <label>Year of Passing:</label>
          <input type="text" />
        </div>

        <div>
          <label>Marks / Percentage:</label>
          <input type="text" />
        </div>

        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  )
}
