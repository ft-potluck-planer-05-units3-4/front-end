import React from "react";

const EventGuests = (props) => {
  console.log(props);
  return (
    <div className="eventGuests">
      <div>
        <button onClick={this.addToggle}>Invite Guests</button>
      </div>
      {/* displays invite guest form if addtoggle status is on */}
      {this.state.addToggle === true && (
        <div>
          <form className="guestForm" onSubmit={this.addGuest}>
            <input
              onChange={this.handleChange}
              name="username"
              id="username"
              placeholder="Enter Guest Name To Invite"
              value={this.state.username}
              type="text"
              className="guestInput"
              required
            />
          </form>
        </div>
      )}
      <h1>Guest List</h1>
      {props.singleEvent.guests.map((guest) => (
        <div key={guest.username} className="guestList">
          <p className="guestName">
            {/* use allUsers array to get full names for guests array, which only has username */}
            {props.allUsers.find((user) => user.username === guest.username)
              ? props.allUsers.find((user) => user.username === guest.username)
                  .name
              : null}
          </p>
          <p className="guestAttend">
            {/* check guest attending status and conditionally render */}
            {guest.going === null ? (
              <span className="invited">"Invited..."</span>
            ) : (
              <span className="attending">"Confirmed!"</span>
            )}
          </p>
          {/* only host can see following host-star or delete buttons */}
          {props.organizer_id === props.activeUser.id && (
            <div>
              {/* if host, then star icon, if guest, option to delete */}
              {props.activeUser.username === guest.username ? (
                <p className="hostIcon">
                  <i className="fas fa-star" />
                </p>
              ) : (
                <p
                  onClick={(e) => this.deleteGuest(e, guest)}
                  className="deleteGuest"
                >
                  <i className="far fa-trash-alt" />
                </p>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default EventGuests;
