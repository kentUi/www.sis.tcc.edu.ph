import { useState, useEffect } from 'react'
import axios from 'axios';

function SettingsProfileComponents() {

    const [detail, setDetail] = useState(null);

    const bearerToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzb3VyY2UiOiJhNzFkMTRmZTY3Yzk4YzRlZDRmNDc4Njg3OTJkZWUwZjY1YmExZTRhOThlNDZkZTZkNmVhMmJlNGQwNzA4MzBlIiwibm9uY2UiOiIxMDc4ZWY1OGExNzgzNzVlNWFkOTlkZDY2N2FhNWE4YWEzNjQ0ZDIzNzQ2MDJkOTk2Yjg1MDNlN2IzODZlZDM4ZmQyMjlmY2RjNzIyZTA5OWZkZjVjM2E5MmI0M2Y5NGFhOGU1NmIyMmE0YzJkMDFmZDYyZjVlNmZkNGI0MTE5NDJjNWU1MDc3ZDhhMDNhMmYwNWMyNzY4MjNmMjRmNmEwMDUwMzIyOTg3MTBhODBjMWQxY2QzYjE3M2ZhY2U0NTU3MDhmMTRjODQzZDU1ZDIyYTE3YzYxOGM0OTk4NTNiM2I1OTgyYTE1ZDg2ODJmYzVmMDc1YzM2MjgxYmM2NzlkM2M0ZGI5NjRkYWZhZGRkNjNmOTg4ZjMzZDMxNzZhZWEwMTliZGYzYTFkZmUxNmIzMmRiN2RmZDA3NzkyNzU4OGEyYjUyZDNiZGE4YzYyZjBiNzgxY2E3MWE0OTMyYmMyYTUzMTQ1NmQ5YjQ2MTE5OTVkZDU2MDk3MzRmM2UyOGQ4OWRkOTViYzBmODdmNzc2ZTkyZmU3NjM2Mzk0NGVmMGY2ZjM4ODUwMDI5OWQxMTA3NDY4NjY1ZTc0Y2YzMGEzMzkzMjk3NGU0YzQzM2UxYTFjMGU4ODg0ODc4MTdjMDhlMmVkMGU2Zjc2NjM4NmY5ZWM1NDJlYzcyMWI0MjQiLCJleHAiOjE3MjAyNTU2MjV9.MzekGWGpN5Yim9cBO8PoMFjKVLz0Gd02-VmSCKqPL0xW5lVDwkoJ8lEZlt4irN2IDB_5LYJ-HDQ117JYDQUBfg';

    const api = axios.create({
        baseURL: 'http://localhost/tcc-proxy-server-api/index.php/api/',
        headers: {
            'Authorization': `Bearer ${bearerToken}`
        }
    });

    const getInformation = async () => {
        try {
            const response = await api.post('/get-info/', { id: '20231054' });
            setDetail(response.data);
        } catch (error) {
            console.error('Error fetching information data:', error);
        }
    };

    useEffect(() => {
        getInformation();
    }, []);

    return (
        <>
            <hr />
            <li><a href="html/user-profile-notification.html"><em className="icon ni ni-bell-fill"></em><span>Notifications <span className="badge rounded-pill bg-danger">2</span></span></a></li>
            <li><a href="html/user-profile-activity.html"><em className="icon ni ni-activity-round-fill"></em><span>Account Activity</span></a></li>
            <li><a href="html/user-profile-setting.html"><em className="icon ni ni-lock-alt-fill"></em><span>Security Settings</span></a></li>
        </>
    )
}

export default SettingsProfileComponents;
